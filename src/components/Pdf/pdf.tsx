import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';



 
// async function BomDia() {
//     useEffect(() => {
//         const colaborador =  JSON.parse(localStorage.colaborador)
//         setName(colaborador)
//     },[])
// }       

// const [name, setName] = useState([])


export async function funcionarioPdf() {
    
   (pdfMake).vfs = pdfFonts.pdfMake.vfs;

    const details = [
        {
                table: {
                    headerRows: 1,
                    body: [
                        [{text: 'Name: Claylton', style: 'tableHeader'}, {text: 'Função: estagiario', style: 'tableHeader'}, {text: 'admissão: 20/07/2022', style: 'tableHeader'}],
                        ['Salario:', '', "970,00 R$"],
                        ['Desconto:', '', '- 50,00 R$'],
                        ['Inss:', '', '- 80,00 R$'],
                        ['Salario familia:', '', '100,00 R$'],
                        ['TOTAL:', '', '940,00 R$'],
                    ]
            },
        }
    ];
   
    const docDefinitios = {
        pageSize: 'A4',
        pageMargins: [175,50,50,50],

        content: [details],
  
    }

    pdfMake.createPdf(docDefinitios).download();

}



    