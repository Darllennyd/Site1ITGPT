export default function MetricTable({ data }:{ data: {label:string; value:string}[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-[480px] w-full text-sm">
        <tbody className="[&>tr:nth-child(odd)]:bg-white/5 rounded-lg overflow-hidden">
          {data.map((m,i)=>(
            <tr key={i} className="border-b border-white/10">
              <td className="px-4 py-3 text-white/70">{m.label}</td>
              <td className="px-4 py-3">{m.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-white/50">* Заполните фактические данные из Google Play при запуске.</p>
    </div>
  )
}
