import '../App.css';

const Company = (props) =>{

    const companies = [
        { name: "Company One", category: "Finance", start: 1981, end: 2004 },
        { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
        { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
        { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
        { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
        { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
        { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
        { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
        { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    ];
    
      const filterCompany = companies.filter(Company => Company.start >= props.value)

    return (
        <div className='center'>
              <table>
              <tr>
                <th>STT</th>
                <th>Tên Công Ty</th>
                <th>Bắt Đầu</th>
                <th>Kết Thúc</th>
              </tr>
              {filterCompany.map((Company, index) =>(
              <tr>
                <th>{index}</th>
                <th>{Company.name}</th>
                <th>{Company.start}</th>
                <th>{Company.end}</th>
              </tr>
            ))}
            </table> 
         </div> 
    )
}

export default Company