/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The build pack type.
 */
export const BuildPack = {
  Nixpacks: "nixpacks",
  Static: "static",
  Dockerfile: "dockerfile",
  Dockercompose: "dockercompose",
} as const;
/**
 * The build pack type.
 */
export type BuildPack = ClosedEnum<typeof BuildPack>;

/**
 * The static image.
 */
export const StaticImage = {
  NginxAlpine: "nginx:alpine",
} as const;
/**
 * The static image.
 */
export type StaticImage = ClosedEnum<typeof StaticImage>;

/**
 * How to set redirect with Traefik / Caddy. www<->non-www.
 */
export const Redirect = {
  Www: "www",
  NonWww: "non-www",
  Both: "both",
} as const;
/**
 * How to set redirect with Traefik / Caddy. www<->non-www.
 */
export type Redirect = ClosedEnum<typeof Redirect>;

/**
 * Application object that needs to be created.
 */
export type CreatePublicApplicationRequestBody = {
  /**
   * The project UUID.
   */
  projectUuid: string;
  /**
   * The server UUID.
   */
  serverUuid: string;
  /**
   * The environment name.
   */
  environmentName: string;
  /**
   * The git repository URL.
   */
  gitRepository: string;
  /**
   * The git branch.
   */
  gitBranch: string;
  /**
   * The build pack type.
   */
  buildPack: BuildPack;
  /**
   * The ports to expose.
   */
  portsExposes: string;
  /**
   * The destination UUID.
   */
  destinationUuid?: string | undefined;
  /**
   * The application name.
   */
  name?: string | undefined;
  /**
   * The application description.
   */
  description?: string | undefined;
  /**
   * The application domains.
   */
  domains?: string | undefined;
  /**
   * The git commit SHA.
   */
  gitCommitSha?: string | undefined;
  /**
   * The docker registry image name.
   */
  dockerRegistryImageName?: string | undefined;
  /**
   * The docker registry image tag.
   */
  dockerRegistryImageTag?: string | undefined;
  /**
   * The flag to indicate if the application is static.
   */
  isStatic?: boolean | undefined;
  /**
   * The static image.
   */
  staticImage?: StaticImage | undefined;
  /**
   * The install command.
   */
  installCommand?: string | undefined;
  /**
   * The build command.
   */
  buildCommand?: string | undefined;
  /**
   * The start command.
   */
  startCommand?: string | undefined;
  /**
   * The ports mappings.
   */
  portsMappings?: string | undefined;
  /**
   * The base directory for all commands.
   */
  baseDirectory?: string | undefined;
  /**
   * The publish directory.
   */
  publishDirectory?: string | undefined;
  /**
   * Health check enabled.
   */
  healthCheckEnabled?: boolean | undefined;
  /**
   * Health check path.
   */
  healthCheckPath?: string | undefined;
  /**
   * Health check port.
   */
  healthCheckPort?: string | null | undefined;
  /**
   * Health check host.
   */
  healthCheckHost?: string | null | undefined;
  /**
   * Health check method.
   */
  healthCheckMethod?: string | undefined;
  /**
   * Health check return code.
   */
  healthCheckReturnCode?: number | undefined;
  /**
   * Health check scheme.
   */
  healthCheckScheme?: string | undefined;
  /**
   * Health check response text.
   */
  healthCheckResponseText?: string | null | undefined;
  /**
   * Health check interval in seconds.
   */
  healthCheckInterval?: number | undefined;
  /**
   * Health check timeout in seconds.
   */
  healthCheckTimeout?: number | undefined;
  /**
   * Health check retries count.
   */
  healthCheckRetries?: number | undefined;
  /**
   * Health check start period in seconds.
   */
  healthCheckStartPeriod?: number | undefined;
  /**
   * Memory limit.
   */
  limitsMemory?: string | undefined;
  /**
   * Memory swap limit.
   */
  limitsMemorySwap?: string | undefined;
  /**
   * Memory swappiness.
   */
  limitsMemorySwappiness?: number | undefined;
  /**
   * Memory reservation.
   */
  limitsMemoryReservation?: string | undefined;
  /**
   * CPU limit.
   */
  limitsCpus?: string | undefined;
  /**
   * CPU set.
   */
  limitsCpuset?: string | null | undefined;
  /**
   * CPU shares.
   */
  limitsCpuShares?: number | undefined;
  /**
   * Custom labels.
   */
  customLabels?: string | undefined;
  /**
   * Custom docker run options.
   */
  customDockerRunOptions?: string | undefined;
  /**
   * Post deployment command.
   */
  postDeploymentCommand?: string | undefined;
  /**
   * Post deployment command container.
   */
  postDeploymentCommandContainer?: string | undefined;
  /**
   * Pre deployment command.
   */
  preDeploymentCommand?: string | undefined;
  /**
   * Pre deployment command container.
   */
  preDeploymentCommandContainer?: string | undefined;
  /**
   * Manual webhook secret for Github.
   */
  manualWebhookSecretGithub?: string | undefined;
  /**
   * Manual webhook secret for Gitlab.
   */
  manualWebhookSecretGitlab?: string | undefined;
  /**
   * Manual webhook secret for Bitbucket.
   */
  manualWebhookSecretBitbucket?: string | undefined;
  /**
   * Manual webhook secret for Gitea.
   */
  manualWebhookSecretGitea?: string | undefined;
  /**
   * How to set redirect with Traefik / Caddy. www<->non-www.
   */
  redirect?: Redirect | null | undefined;
  /**
   * The flag to indicate if the application should be deployed instantly.
   */
  instantDeploy?: boolean | undefined;
  /**
   * The Dockerfile content.
   */
  dockerfile?: string | undefined;
  /**
   * The Docker Compose location.
   */
  dockerComposeLocation?: string | undefined;
  /**
   * The Docker Compose raw content.
   */
  dockerComposeRaw?: string | undefined;
  /**
   * The Docker Compose custom start command.
   */
  dockerComposeCustomStartCommand?: string | undefined;
  /**
   * The Docker Compose custom build command.
   */
  dockerComposeCustomBuildCommand?: string | undefined;
  /**
   * The Docker Compose domains.
   */
  dockerComposeDomains?: Array<any> | undefined;
  /**
   * The watch paths.
   */
  watchPaths?: string | undefined;
  /**
   * Use build server.
   */
  useBuildServer?: boolean | null | undefined;
};

/** @internal */
export const BuildPack$inboundSchema: z.ZodNativeEnum<typeof BuildPack> = z
  .nativeEnum(BuildPack);

/** @internal */
export const BuildPack$outboundSchema: z.ZodNativeEnum<typeof BuildPack> =
  BuildPack$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BuildPack$ {
  /** @deprecated use `BuildPack$inboundSchema` instead. */
  export const inboundSchema = BuildPack$inboundSchema;
  /** @deprecated use `BuildPack$outboundSchema` instead. */
  export const outboundSchema = BuildPack$outboundSchema;
}

/** @internal */
export const StaticImage$inboundSchema: z.ZodNativeEnum<typeof StaticImage> = z
  .nativeEnum(StaticImage);

/** @internal */
export const StaticImage$outboundSchema: z.ZodNativeEnum<typeof StaticImage> =
  StaticImage$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace StaticImage$ {
  /** @deprecated use `StaticImage$inboundSchema` instead. */
  export const inboundSchema = StaticImage$inboundSchema;
  /** @deprecated use `StaticImage$outboundSchema` instead. */
  export const outboundSchema = StaticImage$outboundSchema;
}

/** @internal */
export const Redirect$inboundSchema: z.ZodNativeEnum<typeof Redirect> = z
  .nativeEnum(Redirect);

/** @internal */
export const Redirect$outboundSchema: z.ZodNativeEnum<typeof Redirect> =
  Redirect$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Redirect$ {
  /** @deprecated use `Redirect$inboundSchema` instead. */
  export const inboundSchema = Redirect$inboundSchema;
  /** @deprecated use `Redirect$outboundSchema` instead. */
  export const outboundSchema = Redirect$outboundSchema;
}

/** @internal */
export const CreatePublicApplicationRequestBody$inboundSchema: z.ZodType<
  CreatePublicApplicationRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({
  project_uuid: z.string(),
  server_uuid: z.string(),
  environment_name: z.string(),
  git_repository: z.string(),
  git_branch: z.string(),
  build_pack: BuildPack$inboundSchema,
  ports_exposes: z.string(),
  destination_uuid: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  domains: z.string().optional(),
  git_commit_sha: z.string().optional(),
  docker_registry_image_name: z.string().optional(),
  docker_registry_image_tag: z.string().optional(),
  is_static: z.boolean().optional(),
  static_image: StaticImage$inboundSchema.optional(),
  install_command: z.string().optional(),
  build_command: z.string().optional(),
  start_command: z.string().optional(),
  ports_mappings: z.string().optional(),
  base_directory: z.string().optional(),
  publish_directory: z.string().optional(),
  health_check_enabled: z.boolean().optional(),
  health_check_path: z.string().optional(),
  health_check_port: z.nullable(z.string()).optional(),
  health_check_host: z.nullable(z.string()).optional(),
  health_check_method: z.string().optional(),
  health_check_return_code: z.number().int().optional(),
  health_check_scheme: z.string().optional(),
  health_check_response_text: z.nullable(z.string()).optional(),
  health_check_interval: z.number().int().optional(),
  health_check_timeout: z.number().int().optional(),
  health_check_retries: z.number().int().optional(),
  health_check_start_period: z.number().int().optional(),
  limits_memory: z.string().optional(),
  limits_memory_swap: z.string().optional(),
  limits_memory_swappiness: z.number().int().optional(),
  limits_memory_reservation: z.string().optional(),
  limits_cpus: z.string().optional(),
  limits_cpuset: z.nullable(z.string()).optional(),
  limits_cpu_shares: z.number().int().optional(),
  custom_labels: z.string().optional(),
  custom_docker_run_options: z.string().optional(),
  post_deployment_command: z.string().optional(),
  post_deployment_command_container: z.string().optional(),
  pre_deployment_command: z.string().optional(),
  pre_deployment_command_container: z.string().optional(),
  manual_webhook_secret_github: z.string().optional(),
  manual_webhook_secret_gitlab: z.string().optional(),
  manual_webhook_secret_bitbucket: z.string().optional(),
  manual_webhook_secret_gitea: z.string().optional(),
  redirect: z.nullable(Redirect$inboundSchema).optional(),
  instant_deploy: z.boolean().optional(),
  dockerfile: z.string().optional(),
  docker_compose_location: z.string().optional(),
  docker_compose_raw: z.string().optional(),
  docker_compose_custom_start_command: z.string().optional(),
  docker_compose_custom_build_command: z.string().optional(),
  docker_compose_domains: z.array(z.any()).optional(),
  watch_paths: z.string().optional(),
  use_build_server: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    "project_uuid": "projectUuid",
    "server_uuid": "serverUuid",
    "environment_name": "environmentName",
    "git_repository": "gitRepository",
    "git_branch": "gitBranch",
    "build_pack": "buildPack",
    "ports_exposes": "portsExposes",
    "destination_uuid": "destinationUuid",
    "git_commit_sha": "gitCommitSha",
    "docker_registry_image_name": "dockerRegistryImageName",
    "docker_registry_image_tag": "dockerRegistryImageTag",
    "is_static": "isStatic",
    "static_image": "staticImage",
    "install_command": "installCommand",
    "build_command": "buildCommand",
    "start_command": "startCommand",
    "ports_mappings": "portsMappings",
    "base_directory": "baseDirectory",
    "publish_directory": "publishDirectory",
    "health_check_enabled": "healthCheckEnabled",
    "health_check_path": "healthCheckPath",
    "health_check_port": "healthCheckPort",
    "health_check_host": "healthCheckHost",
    "health_check_method": "healthCheckMethod",
    "health_check_return_code": "healthCheckReturnCode",
    "health_check_scheme": "healthCheckScheme",
    "health_check_response_text": "healthCheckResponseText",
    "health_check_interval": "healthCheckInterval",
    "health_check_timeout": "healthCheckTimeout",
    "health_check_retries": "healthCheckRetries",
    "health_check_start_period": "healthCheckStartPeriod",
    "limits_memory": "limitsMemory",
    "limits_memory_swap": "limitsMemorySwap",
    "limits_memory_swappiness": "limitsMemorySwappiness",
    "limits_memory_reservation": "limitsMemoryReservation",
    "limits_cpus": "limitsCpus",
    "limits_cpuset": "limitsCpuset",
    "limits_cpu_shares": "limitsCpuShares",
    "custom_labels": "customLabels",
    "custom_docker_run_options": "customDockerRunOptions",
    "post_deployment_command": "postDeploymentCommand",
    "post_deployment_command_container": "postDeploymentCommandContainer",
    "pre_deployment_command": "preDeploymentCommand",
    "pre_deployment_command_container": "preDeploymentCommandContainer",
    "manual_webhook_secret_github": "manualWebhookSecretGithub",
    "manual_webhook_secret_gitlab": "manualWebhookSecretGitlab",
    "manual_webhook_secret_bitbucket": "manualWebhookSecretBitbucket",
    "manual_webhook_secret_gitea": "manualWebhookSecretGitea",
    "instant_deploy": "instantDeploy",
    "docker_compose_location": "dockerComposeLocation",
    "docker_compose_raw": "dockerComposeRaw",
    "docker_compose_custom_start_command": "dockerComposeCustomStartCommand",
    "docker_compose_custom_build_command": "dockerComposeCustomBuildCommand",
    "docker_compose_domains": "dockerComposeDomains",
    "watch_paths": "watchPaths",
    "use_build_server": "useBuildServer",
  });
});

/** @internal */
export type CreatePublicApplicationRequestBody$Outbound = {
  project_uuid: string;
  server_uuid: string;
  environment_name: string;
  git_repository: string;
  git_branch: string;
  build_pack: string;
  ports_exposes: string;
  destination_uuid?: string | undefined;
  name?: string | undefined;
  description?: string | undefined;
  domains?: string | undefined;
  git_commit_sha?: string | undefined;
  docker_registry_image_name?: string | undefined;
  docker_registry_image_tag?: string | undefined;
  is_static?: boolean | undefined;
  static_image?: string | undefined;
  install_command?: string | undefined;
  build_command?: string | undefined;
  start_command?: string | undefined;
  ports_mappings?: string | undefined;
  base_directory?: string | undefined;
  publish_directory?: string | undefined;
  health_check_enabled?: boolean | undefined;
  health_check_path?: string | undefined;
  health_check_port?: string | null | undefined;
  health_check_host?: string | null | undefined;
  health_check_method?: string | undefined;
  health_check_return_code?: number | undefined;
  health_check_scheme?: string | undefined;
  health_check_response_text?: string | null | undefined;
  health_check_interval?: number | undefined;
  health_check_timeout?: number | undefined;
  health_check_retries?: number | undefined;
  health_check_start_period?: number | undefined;
  limits_memory?: string | undefined;
  limits_memory_swap?: string | undefined;
  limits_memory_swappiness?: number | undefined;
  limits_memory_reservation?: string | undefined;
  limits_cpus?: string | undefined;
  limits_cpuset?: string | null | undefined;
  limits_cpu_shares?: number | undefined;
  custom_labels?: string | undefined;
  custom_docker_run_options?: string | undefined;
  post_deployment_command?: string | undefined;
  post_deployment_command_container?: string | undefined;
  pre_deployment_command?: string | undefined;
  pre_deployment_command_container?: string | undefined;
  manual_webhook_secret_github?: string | undefined;
  manual_webhook_secret_gitlab?: string | undefined;
  manual_webhook_secret_bitbucket?: string | undefined;
  manual_webhook_secret_gitea?: string | undefined;
  redirect?: string | null | undefined;
  instant_deploy?: boolean | undefined;
  dockerfile?: string | undefined;
  docker_compose_location?: string | undefined;
  docker_compose_raw?: string | undefined;
  docker_compose_custom_start_command?: string | undefined;
  docker_compose_custom_build_command?: string | undefined;
  docker_compose_domains?: Array<any> | undefined;
  watch_paths?: string | undefined;
  use_build_server?: boolean | null | undefined;
};

/** @internal */
export const CreatePublicApplicationRequestBody$outboundSchema: z.ZodType<
  CreatePublicApplicationRequestBody$Outbound,
  z.ZodTypeDef,
  CreatePublicApplicationRequestBody
> = z.object({
  projectUuid: z.string(),
  serverUuid: z.string(),
  environmentName: z.string(),
  gitRepository: z.string(),
  gitBranch: z.string(),
  buildPack: BuildPack$outboundSchema,
  portsExposes: z.string(),
  destinationUuid: z.string().optional(),
  name: z.string().optional(),
  description: z.string().optional(),
  domains: z.string().optional(),
  gitCommitSha: z.string().optional(),
  dockerRegistryImageName: z.string().optional(),
  dockerRegistryImageTag: z.string().optional(),
  isStatic: z.boolean().optional(),
  staticImage: StaticImage$outboundSchema.optional(),
  installCommand: z.string().optional(),
  buildCommand: z.string().optional(),
  startCommand: z.string().optional(),
  portsMappings: z.string().optional(),
  baseDirectory: z.string().optional(),
  publishDirectory: z.string().optional(),
  healthCheckEnabled: z.boolean().optional(),
  healthCheckPath: z.string().optional(),
  healthCheckPort: z.nullable(z.string()).optional(),
  healthCheckHost: z.nullable(z.string()).optional(),
  healthCheckMethod: z.string().optional(),
  healthCheckReturnCode: z.number().int().optional(),
  healthCheckScheme: z.string().optional(),
  healthCheckResponseText: z.nullable(z.string()).optional(),
  healthCheckInterval: z.number().int().optional(),
  healthCheckTimeout: z.number().int().optional(),
  healthCheckRetries: z.number().int().optional(),
  healthCheckStartPeriod: z.number().int().optional(),
  limitsMemory: z.string().optional(),
  limitsMemorySwap: z.string().optional(),
  limitsMemorySwappiness: z.number().int().optional(),
  limitsMemoryReservation: z.string().optional(),
  limitsCpus: z.string().optional(),
  limitsCpuset: z.nullable(z.string()).optional(),
  limitsCpuShares: z.number().int().optional(),
  customLabels: z.string().optional(),
  customDockerRunOptions: z.string().optional(),
  postDeploymentCommand: z.string().optional(),
  postDeploymentCommandContainer: z.string().optional(),
  preDeploymentCommand: z.string().optional(),
  preDeploymentCommandContainer: z.string().optional(),
  manualWebhookSecretGithub: z.string().optional(),
  manualWebhookSecretGitlab: z.string().optional(),
  manualWebhookSecretBitbucket: z.string().optional(),
  manualWebhookSecretGitea: z.string().optional(),
  redirect: z.nullable(Redirect$outboundSchema).optional(),
  instantDeploy: z.boolean().optional(),
  dockerfile: z.string().optional(),
  dockerComposeLocation: z.string().optional(),
  dockerComposeRaw: z.string().optional(),
  dockerComposeCustomStartCommand: z.string().optional(),
  dockerComposeCustomBuildCommand: z.string().optional(),
  dockerComposeDomains: z.array(z.any()).optional(),
  watchPaths: z.string().optional(),
  useBuildServer: z.nullable(z.boolean()).optional(),
}).transform((v) => {
  return remap$(v, {
    projectUuid: "project_uuid",
    serverUuid: "server_uuid",
    environmentName: "environment_name",
    gitRepository: "git_repository",
    gitBranch: "git_branch",
    buildPack: "build_pack",
    portsExposes: "ports_exposes",
    destinationUuid: "destination_uuid",
    gitCommitSha: "git_commit_sha",
    dockerRegistryImageName: "docker_registry_image_name",
    dockerRegistryImageTag: "docker_registry_image_tag",
    isStatic: "is_static",
    staticImage: "static_image",
    installCommand: "install_command",
    buildCommand: "build_command",
    startCommand: "start_command",
    portsMappings: "ports_mappings",
    baseDirectory: "base_directory",
    publishDirectory: "publish_directory",
    healthCheckEnabled: "health_check_enabled",
    healthCheckPath: "health_check_path",
    healthCheckPort: "health_check_port",
    healthCheckHost: "health_check_host",
    healthCheckMethod: "health_check_method",
    healthCheckReturnCode: "health_check_return_code",
    healthCheckScheme: "health_check_scheme",
    healthCheckResponseText: "health_check_response_text",
    healthCheckInterval: "health_check_interval",
    healthCheckTimeout: "health_check_timeout",
    healthCheckRetries: "health_check_retries",
    healthCheckStartPeriod: "health_check_start_period",
    limitsMemory: "limits_memory",
    limitsMemorySwap: "limits_memory_swap",
    limitsMemorySwappiness: "limits_memory_swappiness",
    limitsMemoryReservation: "limits_memory_reservation",
    limitsCpus: "limits_cpus",
    limitsCpuset: "limits_cpuset",
    limitsCpuShares: "limits_cpu_shares",
    customLabels: "custom_labels",
    customDockerRunOptions: "custom_docker_run_options",
    postDeploymentCommand: "post_deployment_command",
    postDeploymentCommandContainer: "post_deployment_command_container",
    preDeploymentCommand: "pre_deployment_command",
    preDeploymentCommandContainer: "pre_deployment_command_container",
    manualWebhookSecretGithub: "manual_webhook_secret_github",
    manualWebhookSecretGitlab: "manual_webhook_secret_gitlab",
    manualWebhookSecretBitbucket: "manual_webhook_secret_bitbucket",
    manualWebhookSecretGitea: "manual_webhook_secret_gitea",
    instantDeploy: "instant_deploy",
    dockerComposeLocation: "docker_compose_location",
    dockerComposeRaw: "docker_compose_raw",
    dockerComposeCustomStartCommand: "docker_compose_custom_start_command",
    dockerComposeCustomBuildCommand: "docker_compose_custom_build_command",
    dockerComposeDomains: "docker_compose_domains",
    watchPaths: "watch_paths",
    useBuildServer: "use_build_server",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreatePublicApplicationRequestBody$ {
  /** @deprecated use `CreatePublicApplicationRequestBody$inboundSchema` instead. */
  export const inboundSchema = CreatePublicApplicationRequestBody$inboundSchema;
  /** @deprecated use `CreatePublicApplicationRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    CreatePublicApplicationRequestBody$outboundSchema;
  /** @deprecated use `CreatePublicApplicationRequestBody$Outbound` instead. */
  export type Outbound = CreatePublicApplicationRequestBody$Outbound;
}

export function createPublicApplicationRequestBodyToJSON(
  createPublicApplicationRequestBody: CreatePublicApplicationRequestBody,
): string {
  return JSON.stringify(
    CreatePublicApplicationRequestBody$outboundSchema.parse(
      createPublicApplicationRequestBody,
    ),
  );
}

export function createPublicApplicationRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<CreatePublicApplicationRequestBody, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CreatePublicApplicationRequestBody$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePublicApplicationRequestBody' from JSON`,
  );
}