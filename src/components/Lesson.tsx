import { isPast, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CheckCircle, Lock } from "phosphor-react";
import { Link } from "react-router-dom";

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class'
}

export function Lesson(props: LessonProps) {
    const isAvailableAt = isPast(props.availableAt)
    
    const availableAtDateFormated = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
        locale: ptBR
    })
    
    return(
        <Link to={`/event/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableAtDateFormated}
            </span>
            <div className=" rounded border border-gray-500 p-4 mt-2 group-active:bg-yellow-300 transition-colors duration-300 group-hover:border-yellow-500">
                <header className=" flex itens-center justify-between">
                    {isAvailableAt ? (
                        <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )} 
                    
                    {props.type == 'live' ? (
                    <span className="text-xs rounded py-[0.125rem] px-2 text-red-700 border border-red-700 font-bold">
                        AO VIVO
                    </span> ) : (
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-orange-500 font-bold">
                        AULA PRÁTICA
                    </span> )}
                </header>

                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </Link>

    )
}