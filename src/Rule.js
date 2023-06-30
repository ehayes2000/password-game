import { CSSTransition } from 'react-transition-group';
import './css/RuleTransitions.css';


const Rule = ({ rule, name, satisfied, hidden }) => (
    <CSSTransition
        in={!hidden}
        timeout={300}
        classNames="rule-card"
        unmountOnExit
    >
        <div className={`w-1/3 mx-auto overflow-hidden rounded-xl 
        font-sans
        shadow-slate-300 shadow-md mt-4
        border ${satisfied ? 'border-green-500' : 'border-rose-500'} text-lg`}>
            <div className={`flex items-center p-2 pl-3 ${satisfied ? 'bg-green-300' : 'bg-rose-300'} transition-colors duration-175 ease-in`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                    className={`w-6 h-6 mr-2 text-green-500 ${satisfied ? '' : 'hidden'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className={`w-6 h-6 text-rose-500 ${satisfied ? 'hidden' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

                <div>
                    Rule {name}
                </div>
            </div>
            <div className={`${satisfied ? 'bg-green-100' : 'bg-rose-100'} p-4 transition-colors duration-175 ease-in`}>
                {rule}
            </div>
        </div>
    </CSSTransition>
);

export default Rule;

// const Rule = ({ rule, name, satisfied, hidden }) => (
// //     <div className={`w-1/3 mx-auto overflow-hidden rounded-xl 
// //     font-sans
// //   shadow-slate-300 shadow-md mt-4 ${hidden ? 'opacity-0 hidden transition-opacity ease-in duration-300' : 'opacity-100 transition-opacity ease-out duration-300'} 
// //     border ${satisfied ? 'border-green-500' : 'border-rose-500'} text-lg`}>

//     <div className={`w-1/3 mx-auto overflow-hidden rounded-xl 
//     font-sans
//   shadow-slate-300 shadow-md mt-4 ${hidden ? 'opacity-0 transform -translate-y-2' : 'opacity-100 transform translate-y-0'}
//     border ${satisfied ? 'border-green-500' : 'border-rose-500'} text-lg transition-all duration-300 ease-in-out`}>
//         <div className={`flex items-center p-2 pl-3 ${satisfied ? 'bg-green-300' : 'bg-rose-300'} transition-colors duration-175 ease-in`}>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
//                 className={`w-6 h-6 mr-2 text-green-500 ${satisfied ? '' : 'hidden'}`}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
//             </svg>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
//                 className={`w-6 h-6 text-rose-500 ${satisfied ? 'hidden' : ''}`}>
//                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>

//             <div>
//                 Rule {name}
//             </div>
//         </div>
//         <div className={`${satisfied ? 'bg-green-100' : 'bg-rose-100'} p-4 transition-colors duration-175 ease-in`}>
//             {rule}
//         </div>
//     </div>
// )

// export default Rule;    


