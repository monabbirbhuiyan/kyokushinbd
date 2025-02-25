"use server";
import { db } from "@/lib/prisma";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { Prisma, User } from "@prisma/client";

export const getAuthUserDetails = async () => {
  const user = await currentUser();

  if (!user) {
    return;
  }

  const userData = await db.user.findUnique({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return userData;
};

export const initUser = async (newUser: Partial<User>) => {
  const user = await currentUser();

  if (!user) {
    return;
  }

  const userData = await db.user.upsert({
    where: {
      email: user.emailAddresses[0].emailAddress,
    },
    update: newUser,
    create: {
      id: user.id,
      avatarUrl: user.imageUrl ?? "",
      email: user.emailAddresses[0]?.emailAddress ?? "",
      fullname: user.fullName ?? "",
      phoneNumber: user.phoneNumbers[0]?.phoneNumber ?? "",
      address: "",
      city: "",
      zipCode: "",
      state: "",
      country: "",
    },
  });

  return userData;
};

export const deleteUser = async (userId: string) => {
  const deletedUser = await db.user.delete({ where: { id: userId } });

  return deletedUser;
};

export const getUser = async (id: string) => {
  const user = await db.user.findUnique({
    where: {
      id,
    },
  });

  return user;
};

export type AuthUserWithPortal = Prisma.PromiseReturnType<
  typeof getAuthUserDetails
>;
