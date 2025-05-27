import { Navigate, Route, Routes } from 'react-router';
import {
  CheckEmail,
  Login,
  ResetPassword,
  ResetPasswordChange,
  ResetPasswordChanged,
  ResetPasswordCheckEmail,
  ResetPasswordEnterEmail,
  Signup,
  TwoFactorAuth
} from '../pages';
import { AuthBrandedLayout } from '@/layouts/auth-branded';

const AuthRoutes = () => (
  <Routes>
    <Route element={<AuthBrandedLayout />}>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/2fa" element={<TwoFactorAuth />} />
      <Route path="/check-email" element={<CheckEmail />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/reset-password/enter-email" element={<ResetPasswordEnterEmail />} />
      <Route path="/reset-password/check-email" element={<ResetPasswordCheckEmail />} />
      <Route path="/reset-password/change" element={<ResetPasswordChange />} />
      <Route path="/reset-password/changed" element={<ResetPasswordChanged />} />
      <Route path="*" element={<Navigate to="/error/404" />} />
    </Route>
  </Routes>
);

export { AuthRoutes };
