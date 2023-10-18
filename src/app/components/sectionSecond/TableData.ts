import img1 from '/public/section2/list/clock.png';
import img2 from '/public/section2/list/tollboks.png';
import img3 from '/public/section2/list/symbol_3.png';
import img4 from '/public/section2/list/symbol_4.png';
import img5 from '/public/section2/list/mana.png';
import img6 from '/public/section2/list/module.png';
import img7 from '/public/section2/list/vito.png';

type TableData = {
    id:string,
    img:string,
    title:string,
    freeServer:string,
    subscriptionServer:string
}

export const tableData:TableData[] = [

    {
        id:'1',
        img:img1.src,
        title:'Игровое время',
        freeServer:'-',
        subscriptionServer:'30 дней'
    },
    {  
        id:'2',
        img:img2.src,
        title:'Запечатанный набор инструментов',
        freeServer:'1',
        subscriptionServer:'1'
    },
    {  
        id:'3',
        img:img3.src,
        title:'Хрупкая чистая руна 10-й ступени',
        freeServer:'1',
        subscriptionServer:'-'
    },
    {  
        id:'4',
        img:img4.src,
        title:'Большой символ изобилия творца',
        freeServer:'10',
        subscriptionServer:'-'
    },
    {  
        id:'5',
        img:img5.src,
        title:'Мана-батарея',
        freeServer:'-',
        subscriptionServer:'20'
    },
    {  
        id:'6',
        img:img6.src,
        title:'Модуль памяти',
        freeServer:'-',
        subscriptionServer:'10'
    },
    {  
        id:'7',
        img:img7.src,
        title:'Помощник Вито',
        freeServer:'1',
        subscriptionServer:'1'
    },

]



