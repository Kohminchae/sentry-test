import type { NextConfig } from "next/types";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  /* config options here */
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options

  org: "sentry-test-7r",
  project: "sentry-test1",

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Automatically annotate React components to show their full name in breadcrumbs and session replay
  reactComponentAnnotation: {
    enabled: true,
  },

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,
});

const moduleExports = {
  reactStrictMode: true,
  // 추가적인 Next.js 설정이 있으면 여기에 추가하세요.
};

const sentryWebpackPluginOptions = {
  silent: true, // 빌드 시 Sentry 로그를 숨길 수 있습니다.
  org: "YOUR_ORG_NAME",
  project: "YOUR_PROJECT_NAME",
};

// Sentry 설정을 Next.js 설정과 통합
module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions);

//dsn: https://bd4b85d87969ac834de7add667f6e695@o4508238025064448.ingest.us.sentry.io/4508238036795392
