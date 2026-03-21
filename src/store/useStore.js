import { create } from 'zustand';

const useStore = create((set) => ({
  contacto: [],
  servicios: [],
  inicio: [],
  loading: true,
  error: null,

  setContacto: (data) => set({ contacto: data }),
  setServicios: (data) => set({ servicios: data }),
  setInicio: (data) => set({ inicio: data }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default useStore;