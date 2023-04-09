let x = prompt('Enter number of week')

x = parseInt(x)

if (x == 6 || x == 7) {
    alert('Weekend')
} else if (x <= 0 || x >7) {
    alert('Wrong number')
} else if (x >= 1 && x<=5) {
    alert('Weekday')
}