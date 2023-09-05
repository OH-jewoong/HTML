


// 테이블 생성
const table = document.getElementById('excelTable');
const tbody = table.querySelector('tbody');
const cellName = document.getElementById('cellName');




// 셀 선택 시 배경색 변경
table.addEventListener('click', function(e) {
  const cell = e.target;
  if (cell.tagName === 'TD') {
      // 모든 셀의 배경색 초기화 (흰색)
      const allCells = table.querySelectorAll('th');
      allCells.forEach(function(cell) {
          cell.classList.remove('click_box');
      });

      // 클릭한 셀의 배경색을 파란색으로 설정

      const rowNumber = cell.parentElement.rowIndex;
      const colNumber = cell.cellIndex;
      const colAlphabet = String.fromCharCode(colNumber+64);
      cellName.textContent = `CellName: ${colAlphabet}${rowNumber}`;
      document.getElementById(`${colAlphabet}`).classList.add('click_box');
      document.getElementById(`${rowNumber}`).classList.add('click_box');
      /////////////////////////
      //document.getElementById(`${rowNumber}`).style.backgroundColor = '#9FD0DF';
  }
});








for (let i = 0; i < 10; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 10; j++) {
        if (j===0){
            const cell = document.createElement('th');
            cell.textContent = i + 1;
            cell.className += ' color';
            cell.id = i+1;
            cell.setAttribute('contenteditable', 'false');
            row.appendChild(cell);
            continue;
        }

        const cell = document.createElement('td');
        //console.log(cell);
        cell.setAttribute('contenteditable', 'true'); // 사용자 입력 가능하도록 설정
        cell.textContent = ''; // 초기값은 비워둠

        row.appendChild(cell);
    }
    tbody.appendChild(row);
}






// 버튼 클릭 시 엑셀 내보내기
document.getElementById('exportButton').addEventListener('click', function() {
    const rows = tbody.getElementsByTagName('tr');
    const data = [];

    // 테이블 데이터 추출
    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        const rowData = [];
        for (let j = 0; j < cells.length; j++) {
            rowData.push(cells[j].textContent);
        }
        data.push(rowData.join('\t'));
    }

    // 데이터를 엑셀 형식으로 만들기
    const excelData = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(data.join('\n'));

    // 엑셀 파일 다운로드 링크 생성
    const downloadLink = document.createElement('a');
    downloadLink.href = excelData;
    downloadLink.download = 'data.xls';
    downloadLink.style.display = 'none';

    // 링크를 body에 추가하고 클릭하여 다운로드 실행
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
});
