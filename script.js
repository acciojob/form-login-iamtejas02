function getFormvalue() {
    event.preventDefault(); 

	const fname = document.querySelector('input[name='fname']').value.trim();
	const lname = document.querySelector('input[name='lname']').value.trim();

	alert(fname+ " "+ lname)
}