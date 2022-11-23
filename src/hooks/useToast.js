import { useToast } from "react-native-toast-notifications";

const useToastCustom = () => {
    const toast = useToast()

    return {toast}
}

export default useToastCustom;