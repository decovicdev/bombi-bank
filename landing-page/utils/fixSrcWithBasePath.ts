
const fixSrcWithBasePath = (src:string)=>{
  if(process.env.NEXT_PUBLIC_BASE_PATH){
    return process.env.NEXT_PUBLIC_BASE_PATH+src
  }
  return src
}

export default fixSrcWithBasePath