interface propinterface {
    title:string,
    children?: React.ReactNode,
    css?:string
}
function Card({title,children,css}:propinterface) {
  return (
    <div className={`border p-6 rounded-xl bg-[#ededed] ${css}`}>
        <h1 className="text-xl border-b border-slate-300 pb-2">{title}</h1>
        <div>{children}</div>
    </div>
  )
}

export default Card