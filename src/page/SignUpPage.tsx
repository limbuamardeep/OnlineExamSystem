import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schemas/auth/signup.zod";

type SignupFormData = z.infer<typeof signUpSchema>;

export const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      console.log("Signup data:", data);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="py-20 min-h-screen flex justify-center items-center bg-gray-50">
      <div className="px-12 py-10 border border-gray-200 shadow-2xl rounded-lg flex flex-col gap-8 bg-white max-w-md w-full mx-4">
        <div>
          <div className="text-3xl font-bold text-center text-gray-800">
            Let's Register <br /> Account
          </div>
          <div className="text-center mt-3 text-lg font-roboto text-gray-600">
            Hello user, you have a grateful journey
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center gap-5">
          <div>
            <input
              {...register("firstName")}
              type="text"
              placeholder="Enter your first name"
              className="border border-gray-300 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("password")}
              type="password"
              placeholder="Create a password"
              className="border border-gray-300 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm your password"
              className="border border-gray-300 rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-semibold transition-colors duration-200 disabled:opacity-50"
          >
            {isSubmitting ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <div className="text-center text-gray-600">
          Already have an account?{" "}
          <span className="hover:text-blue-700 cursor-pointer font-semibold">
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};
