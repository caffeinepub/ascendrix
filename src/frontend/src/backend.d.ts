import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Time = bigint;
export interface ContactSubmission {
    name: string;
    email: string;
    serviceInterest: ServiceInterest;
    message: string;
    timestamp: Time;
}
export enum ServiceInterest {
    seo = "seo",
    workshop = "workshop",
    socialMediaManagement = "socialMediaManagement",
    googleAds = "googleAds",
    consulting = "consulting",
    paidAds = "paidAds"
}
export interface backendInterface {
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    submitContactForm(name: string, email: string, message: string, serviceInterest: ServiceInterest): Promise<void>;
}
