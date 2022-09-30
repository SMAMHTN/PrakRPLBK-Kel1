const input = document.getElementById('input');
const root = document.getElementById('root');

const handleClick = () => {
  let data = [];
  if (input.value) {
    data = dataAegis.filter(findData);
  }
  const htmlValue = data.map((value) => {
    return `<h2>${value.nama_lengkap}</h2>
       <br/>
       <table>
         <tr>
           <td>Nama Lengkap</td>
           <td>:</td>
           <td>${value.nama_lengkap || '-'}</td>
         </tr>
         <tr>
           <td>Nama Panggilan</td>
           <td>:</td>
           <td>${value.nama_panggilan || '-'}</td>
         </tr>
         <tr>
           <td>NIM</td>
           <td>:</td>
           <td>${value.nim || '-'}</td>
         </tr>
         <tr>
           <td>Nomor Telepon</td>
           <td>:</td>
           <td>${value.nomor_telepon || '-'}</td>
         </tr>
         <tr>
           <td>ID Line</td>
           <td>:</td>
           <td>${value.id_line || '-'}</td>
         </tr>
         <tr>
           <td>Email</td>
           <td>:</td>
           <td>${value.email || '-'}</td>
         </tr>
         <tr>
           <td>Hobi</td>
           <td>:</td>
           <td>${value.hobi || '-'}</td>
         </tr>
         <tr>
           <td>Tanggal Lahir</td>
           <td>:</td>
           <td>${value.tanggal_lahir || '-'}</td>
         </tr>
         </table>`;
  });

  root.innerHTML = data.length
    ? htmlValue.join('<br/>')
    : 'Data Tidak Ditemukan!';
};
