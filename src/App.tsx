import { Button, Container } from "@chakra-ui/react"
import ExcelJS from 'exceljs';
import FileSaver from "file-saver";

const data = [
  {
    name: "user1",
    email: "user1@gmail.com",
    age: "20",
    address: "1/1 office mode",
  },
  {
    name: "user2",
    email: "user2@gmail.com",
    age: "20",
    address: "2/1 office mode",
  },
  {
    name: "user3",
    email: "user3@gmail.com",
    age: "30",
    address: "3/1 office mode",
  },
  {
    name: "user4",
    email: "user4@gmail.com",
    age: "40",
    address: "4/1 office mode",
  },
  {
    name: "user5",
    email: "user5@gmail.com",
    age: "50",
    address: "5/1 office mode",
  },
]

function App() {
  const exportToExcel = async() => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("My Sheet")

    sheet.columns = [
      {
        header: "Name",
        key: "name",
        width: 10
      },
      {
        header: "Email",
        key: "email",
        width: 10
      },
      {
        header: "Age",
        key: "age",
        width: 10
      },
      {
        header: "Address",
        key: "address",
        width: 10
      },
    ]
    data.forEach((item:any) => {
      sheet.addRow(item)
    })
    workbook.xlsx.writeBuffer().then((res:any) => {
      const data = new Blob([res],{
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      })
      FileSaver.saveAs(data,"user.xlsx")
    })
  }

  return (
    <Container maxW={'container.xl'}>
      <Button onClick={() => exportToExcel()}>Export</Button>
    </Container>
  )
}

export default App