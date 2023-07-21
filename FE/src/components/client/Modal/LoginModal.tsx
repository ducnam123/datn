import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { FcGoogle } from "react-icons/fc";

import { Button, Input, Modal } from "../..";
import { useLoginModal, useRegisterModal } from "../../../hooks";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  const bodyContent = (
    <div
      className="
      flex
      flex-col
      gap-4"
    >
      <Input
        id="email"
        label="Tài khoản"
        placeholder="Nhập email của bạn"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="password"
        label="Mật khẩu"
        type="password"
        placeholder="********"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div
      className="
      flex
      flex-col
      gap-4
      mt-3"
    >
      <hr
        className="
        border
        border-divideLight
        dark:border-divideDark"
      />

      <Button
        outline
        label="Đăng nhập bằng Google"
        icon={FcGoogle}
        onClick={() => alert("Google")}
      />

      <div
        className="
        mt-4
        text-center
        font-light
        text-textDark2nd
        dark:text-textDark2nd"
      >
        <p>
          Bạn chưa có tài khoản?
          <span
            onClick={onToggle}
            className="
            text-textLight
            dark:text-textDark
            cursor-pointer
            hover:underline"
          >
            {" "}
            Đăng ký
          </span>
        </p>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Đăng nhập"
      actionLabel="Đăng nhập"
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
