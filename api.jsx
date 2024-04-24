import axios from 'axios';


export const getInHouseNames = async () => {
    try {
        const response = await axios.get("https://api.retool.com/v1/workflows/876d3ca3-6b84-45eb-8159-456f02ea826c/startTrigger?workflowApiKey=retool_wk_fcfb9954fb2b4644804af04026a66f43")
        return response.data.in
    } catch (error) {
        console.log(error)
    }
}

