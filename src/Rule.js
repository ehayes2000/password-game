const Rule = ({ rule, name, satisfied, hidden }) => {
    if (satisfied) {
        return (
        <div className={`flex flex-col overflow-hidden rounded-xl font-sans font-semibold shadow-slate-300 shadow-md m-6 ${hidden ? 'hidden' : ''}`}>
            <div className="flex-grow p-2 pl-6 bg-green-300">
                Rule {name}
            </div>
            <div className="bg-green-200 p-4">
                {rule}
            </div>
        </div>
        );
    }

    return (
        <div className={`flex flex-col overflow-hidden rounded-xl font-sans font-semibold shadow-slate-300 shadow-md m-6 ${hidden ? 'hidden' : ''}`}>
            <div className="flex-grow p-2 pl-6 bg-rose-300">
                Rule {name}
            </div>
            <div className="bg-rose-200 p-4">
                {rule}
            </div>
        </div>
    );
}

export default Rule;    