// Write a recursive function called reverse which accetps
// a string and returns a new string in reverse

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  let length = str.length;
  if (length === 1) return str.charAt(0);
  const sliceStr = str.slice(1, str.length - 1);
  return str.charAt(length - 1) + reverse(sliceStr) + str.charAt(0);
}

// Instructor solution
// function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }