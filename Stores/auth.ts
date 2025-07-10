 import { defineStore } from 'pinia';
 import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<null | { email: string; role: string }>(null);
  const isAuthenticated = computed(() => user.value !== null);


  async function login(email: string, password: string) {
    if (email === 'admin@example.com' && password === 'password') {
      user.value = { email, role: 'admin' };
      return true;
    }
    return false;
  }

  function logout() {
    user.value = null;
  }

  return { user, isAuthenticated, login, logout };

})