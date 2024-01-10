import useAxios from "./useAxios";


const useLoadTask = (API) => {

    const axios = useAxios();

    axios.get(API)
    .then((res) => {
        console.log(res.data);
        return res.data;
    })
    .catch((err) => {
        return err;
    })

    // return (
    //     <div>

    //     </div>
    // );
};

export default useLoadTask;