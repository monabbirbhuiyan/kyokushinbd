import { AuthUserWithPortal, getAuthUserDetails } from "@/actions/auth";
import { useToast } from "@/hooks/use-toast";
import { useModal } from "@/providers/modal-provider";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";

type Props = {
  id: string | null;
  userData?: Partial<User>;
};

const UserDetails = ({ id, userData }: Props) => {
  const { data, setClose } = useModal();
  const { toast } = useToast();
  const router = useRouter();
  const [authUserData, setAuthUserData] = useState<AuthUserWithPortal | null>(
    null
  );

  useEffect(() => {
    if (data.user) {
      const fetchDetails = async () => {
        const response = await getAuthUserDetails();
        if (response) setAuthUserData(response);
      };
      fetchDetails();
    }
  }, [data]);

  const userDataSchema = z.object({
    fullname: z.string().min(1),
    email: z.string().email(),
    avatarUrl: z.string(),
    phoneNumber: z.string(),
  });

  const form = useForm<z.infer<typeof userDataSchema>>({
    resolver: zodResolver(userDataSchema),
    mode: "onChange",
    defaultValues: {
      fullname: userData ? userData.fullname : data?.user?.fullname,
      email: userData ? userData.email : data?.user?.email,
      avatarUrl: userData ? userData.avatarUrl : data?.user?.avatarUrl,
      phoneNumber: userData ? userData.phoneNumber : data?.user?.phoneNumber,
    },
  });

  useEffect(() => {
    if (data.user) {
      form.reset(data.user);
    }
    if (userData) {
      form.reset(userData);
    }
  }, [userData, data]);

  return <div>UserDetails</div>;
};

export default UserDetails;
