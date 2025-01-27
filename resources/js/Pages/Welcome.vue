<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import InputError from "@/Components/InputError.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TextInput from "@/Components/TextInput.vue";
import WelcomeLayout from "@/Layouts/WelcomeLayout.vue";
import { ref } from "vue";
import { useName } from "@/Composables/useName"; 

defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
    laravelVersion: {
        type: String,
        required: true,
    },
    phpVersion: {
        type: String,
        required: true,
    },
});

const form = useForm({
    name: "",
    remember: false,
});

const { setName } = useName(); 


const showWelcomeMessage = ref(false);

function submit() {
    setName(form.name); 
    showWelcomeMessage.value = true; 
}

</script>

<template>
    <WelcomeLayout>
        <Head title="Welcome" />

        <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div v-if="!showWelcomeMessage">
                <InputLabel for="name" value="Name" />

                <TextInput
                    id="name"
                    type="text"
                    class="mt-1 block w-full"
                    v-model="form.name"
                    required
                    autofocus
                    autocomplete="username"
                    placeholder="Enter your name"
                />

                <InputError class="mt-2" :message="form.errors.name" />
            </div>
            <div
                v-if="showWelcomeMessage"
                class="mt-4 text-lg text-gray-400 text-4xl"
            >
                Welcome, <strong class="text-gray-400">{{ form.name }}</strong>!
            </div>
            <div>
                <div v-if="showWelcomeMessage" class="mt-4 flex justify-center gap-x-4">
                    <Link
                        v-if="canLogin"
                        :href="route('login')"
                        class="text-gray-400 hover:text-blue-800"
                    >
                        Log in
                    </Link>
                    <br />
                    <Link
                        v-if="canRegister"
                        :href="route('register', { name: form.name })" 
                        class="text-gray-400 hover:text-blue-800"
                    >
                        Register
                    </Link>
                </div>
                <PrimaryButton
                    v-if="!showWelcomeMessage"
                    :class="[
                        'w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-left text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 mt-2',
                        { 'opacity-25': disabled },
                    ]"
                    :disabled="form.processing"
                    >CONFIRM
                </PrimaryButton>
            </div>
        </form>
    </WelcomeLayout>
</template>