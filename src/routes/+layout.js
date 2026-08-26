/**
 * Root layout configuration for Subscription Sumo.
 *
 * The app is intentionally client-first because it:
 * - reads and writes localStorage for subscriptions, cancellations, and savings pins
 * - relies on drag-and-drop interactions that are easiest to handle in the browser
 * - does not need SEO or server-rendered markup for a local tool
 */
export const ssr = false;
export const csr = true;
export const prerender = false;