export default function Page(){
    const router = useRouter()
    return<>
    <p>post: {router.query.id}</p>
    
    </>
}