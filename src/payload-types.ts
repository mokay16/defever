/**
 * Hand-maintained Payload types.
 *
 * `payload generate:types` currently fails on this machine (Windows +
 * Node 24 hits an upstream ERR_REQUIRE_ASYNC_MODULE bug in Payload's CLI
 * config loader — https://github.com/payloadcms/payload/issues/16378).
 * The app itself loads payload.config.ts fine via Next's own bundler; only
 * the standalone CLI is affected. This file mirrors the real schema by
 * hand and can be safely overwritten once `npm run generate:types` works.
 */

export interface UploadSize {
  filename?: string | null;
  filesize?: number | null;
  height?: number | null;
  mimeType?: string | null;
  url?: string | null;
  width?: number | null;
}

export interface GalleryPhoto {
  id: number;
  caption: string;
  order: number;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: UploadSize;
    square?: UploadSize;
  };
}

export interface User {
  id: number;
  email: string;
  updatedAt: string;
  createdAt: string;
}
