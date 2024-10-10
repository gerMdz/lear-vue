import axios from "axios";
import {ref} from "vue";

export const useGetData = () => {
    const data = ref(null)
    const errorData= ref(null);
    const loading = ref(true)
    const getData = async (url) => {
        loading.value = true
        try {
            axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            const res = await axios.get(url);
            data.value = res.data;
        } catch (error) {
            errorData.value = 'Fallo en la conexión'
        } finally {
            loading.value = false
        }
    }
    return {
        getData,
        data,
        loading,
        errorData
    }
};
