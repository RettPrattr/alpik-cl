import Button from '../components/atoms/Button'
import useWindowDimensions from './hooks/useWindowDimensions'

const mock = [
    {
        href: '',
        title: 'Потребительский кредит',
        text: ['Понадобились деньги для важных покупок в семью или на личные нужды, а накоплений нет? Мы поможем получить потребительский кредит в банке.'],
    },
    {
        href: '',
        title: 'Рефинансирование',
        text: ['Если у вас есть кредит, но условия не устраивают, то эта услуга для вас. Мы заменим старый заём на новый, ещё и с выгодой для вас.'],
    },
    {
        href: '',
        title: 'Ипотека',
        text: ['Первая покупка недвижимости или расширение жилой площади требует помощи у банка. Если вы уже обращались в банк, но получили отказ, мы поможем получить согласие.'],
    },
    {
        href: '',
        title: 'Лизинг',
        text: ['Первая покупка недвижимости или расширение жилой площади требует помощи у банка. Если вы уже обращались в банк, но получили отказ, мы поможем получить согласие.'],
    },

]


// const stats =[
//     {
//         description: 'Общая площадь',
//         value: '351,87 м2'
//     },
//     {
//         description: 'Количество комнат',
//         value: '6'
//     },
//     {
//         description: 'Материал',
//         value: 'Клеёный брус'
//     },
//     {
//         description: 'Гарантия',
//         value: '15 лет'
//     },
//     // {
//     //     description: 'Гарантия',
//     //     value: '15 лет'
//     // }
// ]



export default function TextCards (props) {

    // const {data} = props

    const { projectProp } = props

    console.log(props, "TEXTTTT")

    const type = props.type

    if (type === 1) {
        return (
            <section className="text-cards text-cards-1">
                <div className="container flex flex-row justify-between">
                    {mock.map((m, i) => <TextCard key={i} {...m} index={i} />)}
                </div>
            </section>
        )
    } else if (type === 2) {
        return (
            <section className="text-cards text-cards-2">
                <div className="container flex flex-row justify-between">
                    {projectProp?.map((m, i) => <TextCard2 key={i} {...m} index={i} />)}
                </div>
            </section>
        )
    }
}


// justify накинуть чтобы кнопка была внизу у всех
function TextCard (props) {


    const [width] = useWindowDimensions()
    
    const {title, text, index} = props

    return (
        <div className="cd3 cm4 flex flex-col h-auto">
            <div className={"text-card flex-col flex px py justify-between base-br" + (width > 800 ? ' h-full ' : ' mbs h-fit')}> 
                <div className="flex-col">
                    <h3 className="my">{title}</h3>
                    <p>{text}</p>
                </div>
                <Button 
                    className="mb0"
                    type={1}
                    text='Text btn'
                />
            </div>
        </div>
    )
}

function TextCard2 (props) {


    const [width] = useWindowDimensions()
    
    const {description, value} = props

    return (
        <div className="cd3 cm4 flex flex-col h-auto">
          <p className={(width > 800 ? ' mb' : ' ')}>{description}</p>
          <h2 className=''>{value}</h2>
        </div>
    )
}