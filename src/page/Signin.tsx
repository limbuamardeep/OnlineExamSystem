import { useState } from "react";
import { z } from "zod";

const signInSchema = z.object({
  identifier: z
    .string()
    .min(1, "Email or username is required")
    .refine(
      (v) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || /^[a-zA-Z0-9_.-]{3,30}$/.test(v),
      "Enter a valid email or username"
    ),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignInValues = z.infer<typeof signInSchema>;

export const SignIn = () => {
  const [form, setForm] = useState<SignInValues>({ identifier: "", password: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof SignInValues, string>>>({});

  const onChange =
    (field: keyof SignInValues) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((f) => ({ ...f, [field]: e.target.value }));
      if (errors[field]) {
        
        const single = signInSchema.pick({ [field]: true } as Record<keyof SignInValues, true>);
        const result = single.safeParse({ [field]: e.target.value });
        setErrors((prev) => ({ ...prev, [field]: result.success ? undefined : result.error.issues[0]?.message }));
      }
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = signInSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SignInValues, string>> = {};
      for (const issue of result.error.issues) {
        const path = issue.path[0] as keyof SignInValues;
        if (!fieldErrors[path]) fieldErrors[path] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    console.log("Sign in data:", result.data);
  };

  return (
    <div className="py-20 min-h-screen flex justify-center items-center bg-gray-50">
      <div className="px-12 py-10 border border-gray-200 shadow-2xl rounded-lg flex flex-col gap-8 bg-white max-w-md w-full mx-4">
        <div>
          <div className="text-3xl font-bold text-center text-gray-800">
            Let's Sign you in
          </div>
          <div className="text-center mt-3 text-lg font-roboto text-gray-600">
            Welcome Back,
            <br /> You have been missed
          </div>
        </div>
        <form className="flex flex-col justify-center" onSubmit={onSubmit} noValidate>
          <div>
            <input
              type="text"
              placeholder="Email or username"
              value={form.identifier}
              onChange={onChange("identifier")}
              aria-invalid={!!errors.identifier}
              aria-describedby={errors.identifier ? "identifier-error" : undefined}
              className={`border rounded-md w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.identifier ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.identifier && (
              <div id="identifier-error" className="mt-1 text-sm text-red-600">
                {errors.identifier}
              </div>
            )}
          </div>
          <div className="mt-5">
            <input
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={onChange("password")}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
              className={`w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <div id="password-error" className="mt-1 text-sm text-red-600">
                {errors.password}
              </div>
            )}
          </div>
          <div className="text-sm text-right mt-2 hover:text-blue-700 cursor-pointer">
            Forgot Password?
          </div>
          <button
            type="submit"
            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md py-3 font-semibold transition-colors duration-200"
          >
            Sign in
          </button>
        </form>
        <div className="flex flex-row justify-center items-center">
          <div className="h-px bg-gray-300 grow"></div>
          <div className="font-semibold mx-4 text-gray-500 text-sm">or</div>
          <div className="h-px bg-gray-300 grow"></div>
        </div>
        <div className="flex flex-row gap-4 justify-center">
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 hover:border-blue-500 cursor-pointer transition-colors duration-200 flex items-center justify-center">
            <img
              src="GOOGLE.jfif"
              alt="Google"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 hover:border-blue-500 cursor-pointer transition-colors duration-200 flex items-center justify-center">
            <img
              src="facebook2.jfif"
              alt="Facebook"
              className="w-12 h-12 object-cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-300 hover:border-blue-500 cursor-pointer transition-colors duration-200 flex items-center justify-center">
            <img
              src="xlogo.jfif"
              alt="X"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="text-center text-gray-600">
          Don't have an account?{" "}
          <span className=" hover:text-blue-700 cursor-pointer font-semibold">
            Register Now
          </span>
        </div>
      </div>
    </div>
  );
};
