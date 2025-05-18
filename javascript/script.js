let copyAllText = document.getElementById("copy-button")
    const submitButton = document.getElementById('generate-numbers')
    function toggleMenu(){
        const mobileMenu = document.querySelector('.mobile-container')
        if (mobileMenu.style.display === "flex"){
            mobileMenu.style.display = "none"
        }else{
            mobileMenu.style.display = "flex"
        }
    }
    function checkInputValue(){
        if (document.querySelector('#print-amount').value === ""){
            document.querySelector('#results-container').style.display = 'none'
            document.querySelector('#copy-button').style.display = 'none'
        }else{
            document.querySelector('#results-container').style.display = 'block'
            document.querySelector('#copy-button').style.display = 'block'
        }
    }
    function checkMultipleValue(){
        let multipleInputs = document.querySelector('.multiple-inputs');
        if (document.getElementById('number-options').value === "multiples"){
            multipleInputs.style.display = "flex"
            document.getElementById("print-amount").style.display = "none"
        }else{
            multipleInputs.style.display = "none"
            document.getElementById("print-amount").style.display = "block"
        }
    }
    function checkMultiples(){
        if (document.querySelector('#from').value === "" || document.querySelector('#upto').value === ""){
            
        }else{
            return
        }
        
    }
    function checkAllValues(){
        if (checkMultiples() || document.getElementById("print-amount").value === ''){
            return
        }else{

            }
        
    }
        document.getElementById('generate-numbers').addEventListener('click', function() {
            if (document.getElementById('number-options').value !== document.getElementById('number-options').options[0].value
             && document.getElementById('separator').value !== document.getElementById('separator').options[0].value 
             || checkAllValues()){
                let value = document.getElementById('number-options').value;
                let amount = parseInt(document.getElementById("print-amount").value);
                let startFrom = parseInt(document.getElementById("from").value);
                let upto = parseInt(document.getElementById("upto").value);

                let separator = document.getElementById('separator').value;
                copyAllText.style.display = "block"
                let results = [];

                switch(value) {
                    case 'binary':
                        results = generateBinaryNumbers(amount);
                        break;
                    case 'squares':
                        results = generateSquareNumbers(amount);
                        break;
                    case 'cube':
                        results = generateCubeNumbers(amount);
                        break;
                    case 'prime':
                        results = generatePrimeNumbers(amount);
                        break;
                    case 'factors':
                        results = generateFactors(amount);
                        break;
                    case 'multiples':
                        results = generateMultiples(startFrom, upto);
                        break;
                    case 'fibonacci':
                        results = generateFibonacciNumbers(amount);
                        break;
                    case 'factorial':
                        results = generateFactorialNumbers(amount);
                        break;
                    case 'triangular':
                        results = generateTriangularNumbers(amount);
                        break;
                    case 'perfect':
                        results = generatePerfectNumbers(amount);
                        break;
                    case 'armstrong':
                        results = generateArmstrongNumbers(amount);
                        break;
                    case 'hexadecimal':
                        results = generateHexadecimalNumbers(amount);
                        break;
                    case 'octal':
                        results = generateOctalNumbers(amount);
                        break;
                    case 'powers-of-two':
                        results = generatePowersOfTwo(amount);
                        break;
                    case 'powers-of-three':
                        results = generatePowersOfThree(amount);
                        break;
                    case 'powers-of-ten':
                        results = generatePowersOfTen(amount);
                        break;
                }

                displayResults(results, separator);     
             }else{
                document.getElementById("error-msg").innerText = 'Please complete the above field'
                setTimeout(function(){
                    document.getElementById("error-msg").innerText = ''
                }, 3000)
             }
           
        });

        function generateBinaryNumbers(n) {
            let binaries = [];
            for (let i = 0; i < n; i++) {
                binaries.push(i.toString(2));
            }
            return binaries;
        }

        function generateSquareNumbers(n) {
            let squares = [];
            for (let i = 1; i <= n; i++) {
                squares.push(i * i);
            }
            return squares;
        }

        function generateCubeNumbers(n) {
            let cubes = [];
            for (let i = 1; i <= n; i++) {
                cubes.push(i * i * i);
            }
            return cubes;
        }

        function generatePrimeNumbers(n) {
            let primes = [];
            let num = 2;
            while (primes.length < n) {
                if (isPrime(num)) {
                    primes.push(num);
                }
                num++;
            }
            return primes;
        }

        function isPrime(num) {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    return false;
                }
            }
            return num > 1;
        }

        function generateFactors(n) {
            // Function to calculate factors of a number
            let separator = document.getElementById('separator').value;
            function calculateFactors(num) {
                let factors = [];
                for (let i = 1; i <= num; i++) {
                    if (num % i === 0) {
                        factors.push(i); // Add to factors if divisible
                    }
                }
                return factors;
            }

            // Get the factors for the user input
            let factors = calculateFactors(n);

            // Display the factors
            return [`The factors of ${n} are: ${factors.join(separator)}`];
        }

        function generateMultiples(n, x) {
            ///count = upto
            let separator = document.getElementById('separator').value;
            let multiples = [];
            for (let i = 1; i <= x; i++) {
                multiples.push(n * i); // Generate multiples of `n`
            }
            return [`The multiples of ${n} up to ${x} are: ${multiples.join(separator)}`];
        }

        function generateFibonacciNumbers(n) {
            let fibonacci = [0, 1];
            for (let i = 2; i < n; i++) {
                fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
            }
            return fibonacci;
        }

        function generateFactorialNumbers(n) {
            let factorials = [];
            let fact = 1;
            for (let i = 1; i <= n; i++) {
                fact *= i;
                factorials.push(fact);
            }
            return factorials;
        }

        function generateTriangularNumbers(n) {
            let triangulars = [];
            for (let i = 1; i <= n; i++) {
                triangulars.push((i * (i + 1)) / 2);
            }
            return triangulars;
        }

        function generatePerfectNumbers(n) {
            let perfects = [];
            let num = 2;
            while (perfects.length < n) {
                if (isPerfect(num)) {
                    perfects.push(num);
                }
                num++;
            }
            return perfects;
        }

        function isPerfect(num) {
            let sum = 1;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    sum += i;
                    if (i !== num / i) {
                        sum += num / i;
                    }
                }
            }
            return sum === num && num !== 1;
        }

        function generateArmstrongNumbers(n) {
            let armstrongs = [];
            let num = 1;
            while (armstrongs.length < n) {
                if (isArmstrong(num)) {
                    armstrongs.push(num);
                }
                num++;
            }
            return armstrongs;
        }

        function isArmstrong(num) {
            let sum = 0;
            let temp = num;
            let digits = temp.toString().length;
            while (temp > 0) {
                let digit = temp % 10;
                sum += Math.pow(digit, digits);
                temp = Math.floor(temp / 10);
            }
            return sum === num;
        }

        function generateHexadecimalNumbers(n) {
            let hexadecimals = [];
            for (let i = 0; i < n; i++) {
                hexadecimals.push(i.toString(16).toUpperCase());
            }
            return hexadecimals;
        }

        function generateOctalNumbers(n) {
            let octals = [];
            for (let i = 0; i < n; i++) {
                octals.push(i.toString(8));
            }
            return octals;
        }

        function generatePowersOfTwo(n) {
            let powers = [];
            for (let i = 0; i < n; i++) {
                powers.push(Math.pow(2, i));
            }
            return powers;
        }

        function generatePowersOfThree(n) {
            let powers = [];
            for (let i = 0; i < n; i++) {
                powers.push(Math.pow(3, i));
            }
            return powers;
        }

        function generatePowersOfTen(n) {
            let powers = [];
            for (let i = 0; i < n; i++) {
                powers.push(Math.pow(10, i));
            }
            return powers;
        }

        function displayResults(results, separator) {
            let container = document.getElementById('results-container');
            container.innerHTML = results.join(separator);
        }

        document.getElementById('copy-button').addEventListener('click', function() {
            let resultsContainer = document.getElementById('results-container');
            let textToCopy = resultsContainer.textContent;

            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(textToCopy).then(function() {
                    copyAllText.innerText = "Copied to clipboard";
                    setTimeout(function(){
                        copyAllText.innerText = "Copy to clipboard"
                    }, 3000)
                }).catch(function(err) {
                    copyAllText.innerText = " Failed to copy to clipboard";
                    setTimeout(function(){
                        copyAllText.innerText = "Copy to clipboard"
                    }, 3000)
                });
            } else {
                let textArea = document.createElement('textarea');
                textArea.className = "area"
                textArea.value = textToCopy;
                textArea.style.position = 'fixed';
                textArea.style.left = '-999999px';
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                try {
                    document.execCommand('copy');
                    copyAllText.innerText = "Copied to clipboard";
                    setTimeout(function(){
                        copyAllText.innerText = "Copy to clipboard"
                    }, 3000)
                } catch (err) {
                    copyAllText.innerText = " Failed to copy to clipboard", err;
                }
                document.body.removeChild(textArea);
            }
        });