<template>
   <form @submit.prevent="handleLogin" class="max-w-sm mx-auto p-4 space-y-4">

      <div class="max-w-sm mx-auto p-8 bg-blue-50 rounded-md shadow-md mt-20">
         <label class="block mb-2 text-sm font-medium">Email</label>
         <input
           v-model="email"
           type="email"
           class="w-full border p-2 rounded"
           placeholder="Enter your email"
         />
     
           <label class="block mt-4 mb-2 text-sm font-medium">Password</label>
         <input
           v-model="password"
           type="password"
           class="w-full border p-2 rounded"
           placeholder="Enter your password"
         />
            <button  type="submit" class="w-full text-center p-2 bg-blue-600 text-white rounded mt-8 hover:bg-blue-700">
      Login
    </button>
         <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
       </div>
   </form>
 

</template>

<script setup lang="ts">
const email = ref('');
const password = ref('');
const error = ref('');
import { useRouter } from 'vue-router';
import { useAuthStore } from '~/Stores/auth';

//   try {
//     // Simulate a login request
//     if (email.value === 'I1K7I@example.com' && password.value === 'password') {
//       // Redirect to the index page on successful login
//       window.location.href = '/';
//     } else {
//       error.value = 'Invalid email or password';
//     }
//   } catch (err) {
//     error.value = 'An error occurred';
//   }
// };

const router = useRouter();
const auth = useAuthStore();
async function handleLogin(){
   const success = await auth.login(email.value, password.value);
   if (success) {
     router.push('/users/users');
   } else {
     error.value = 'Invalid email or password';
   }
}
</script>
