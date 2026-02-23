import { useRouter } from "next/router";  

const HalamanToko = () => {
    const Router = useRouter();
    console.log(Router);
    // const { query } = useRouter();
    return(
        <div>
            <h1>Halaman Toko</h1>
        </div>
    )
}

export default HalamanToko;