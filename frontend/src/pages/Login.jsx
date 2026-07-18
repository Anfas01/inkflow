import { LoaderCircle } from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AuthLayout from "../components/auth/AuthLayout";
import StatusMessage from "../components/common/StatusMessage";
import Button from "../components/ui/Button";
import { getApiError } from "../lib/apiError";
import api from "../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  if (localStorage.getItem("token")) return <Navigate to="/" replace />;
  const handleSubmit = async (event) => {
    event.preventDefault(); setError(""); setIsSubmitting(true);
    try { const response = await api.post("/auth/login", { email, password }); localStorage.setItem("token", response.data.token); navigate("/", { replace: true }); }
    catch (requestError) { setError(getApiError(requestError, "Unable to sign in right now.")); }
    finally { setIsSubmitting(false); }
  };
  return <AuthLayout title="Welcome back" subtitle="Sign in to continue to your notes." footer={<>New to InkFlow? <Link className="focus-ring rounded-sm font-medium text-blue-600 hover:text-blue-700" to="/register">Create an account</Link></>}><form onSubmit={handleSubmit} className="space-y-5"><StatusMessage error={error} /><div><label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">Email</label><input id="email" type="email" autoComplete="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" className="focus-ring w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm placeholder:text-slate-400" /></div><div><label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">Password</label><input id="password" type="password" autoComplete="current-password" required value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Enter your password" className="focus-ring w-full rounded-md border border-slate-300 px-3 py-2.5 text-sm placeholder:text-slate-400" /></div><Button className="w-full" type="submit" disabled={isSubmitting}>{isSubmitting && <LoaderCircle className="size-4 animate-spin" />}{isSubmitting ? "Signing in" : "Sign in"}</Button></form></AuthLayout>;
};

export default Login;
