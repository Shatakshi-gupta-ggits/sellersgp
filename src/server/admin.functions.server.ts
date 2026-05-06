import { createServerFn } from "@tanstack/react-start";
import { 
  getStats as getStatsFromStore,
  listLeads as listLeadsFromStore,
  listServices as listServicesFromStore,
  updateLeadStatus as updateLeadStatusInStore,
  deleteLead as deleteLeadFromStore,
  toggleService as toggleServiceInStore,
  createLead as createLeadInStore,
  type Lead,
  type Service
} from "./dummy-store";

// Export types for use in components
export type { Lead, Service } from "./dummy-store";

// Stats function
export const getStats = createServerFn().handler(async () => {
  return getStatsFromStore();
});

// Leads functions
export const listLeads = createServerFn().handler(async () => {
  return listLeadsFromStore();
});

export const updateLeadStatus = createServerFn().handler(async (data: { id: string; status: Lead["status"] }) => {
  return updateLeadStatusInStore(data.id, data.status);
});

export const deleteLead = createServerFn().handler(async (data: { id: string }) => {
  return deleteLeadFromStore(data.id);
});

// Services functions
export const listServices = createServerFn().handler(async () => {
  return listServicesFromStore();
});

export const toggleService = createServerFn().handler(async (data: { id: string }) => {
  return toggleServiceInStore(data.id);
});

// Contact form function
export const createLead = createServerFn().handler(async (data: { name: string; phone: string; email: string; business?: string; service?: string; message?: string }) => {
  return createLeadInStore(data);
});