import { ref } from 'vue';

export function useName() {
    const name = ref(''); 

    function setName(newName) {
        name.value = newName;
    }

    function getNameFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('name') || '';
    }

    return {
        name,
        setName,
        getNameFromUrl,
    };
}