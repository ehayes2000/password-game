const Rule = ({ rule, name, satisfied, hidden }) => (
    <div className={`flex flex-col overflow-hidden rounded-xl font-sans font-semibold shadow-slate-300 shadow-md m-6 ${hidden ? 'hidden' : ''}`}>
        <div className={`flex-grow p-2 pl-6 ${satisfied ? 'bg-green-300' : 'bg-rose-300'}`}>
            Rule {name}
        </div>
        <div className={`${satisfied ? 'bg-green-200': 'bg-rose-200'} p-4`}>
            {rule}
        </div>
    </div>
)
     
export default Rule;    