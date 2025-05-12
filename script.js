document.addEventListener('DOMContentLoaded', function() {
    // Event Listeners Section
    // Color Box
    const colorBox = document.getElementById('colorBox');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const resetColorBtn = document.getElementById('resetColorBtn');
    
    changeColorBtn.addEventListener('click', function() {
        const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        colorBox.style.backgroundColor = randomColor;
    });
    
    resetColorBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = '';
    });
    
    // Keyboard Events
    const keyboardInput = document.getElementById('keyboardInput');
    const keyboardOutput = document.getElementById('keyboardOutput');
    
    keyboardInput.addEventListener('input', function(e) {
        keyboardOutput.textContent = 'You typed: ' + e.target.value;
    });
    
    keyboardInput.addEventListener('keydown', function(e) {
        console.log(`Key pressed: ${e.key}`);
    });
    
    // Form Validation
    const demoForm = document.getElementById('demoForm');
    
    demoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
        
        // Name validation
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        if (name === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        } else if (name.length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            isValid = false;
        } else {
            nameError.textContent = '';
        }
        
        // Email validation
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email';
            isValid = false;
        } else {
            emailError.textContent = '';
        }
        
        // Password validation
        const password = document.getElementById('password').value;
        const passwordError = document.getElementById('passwordError');
        if (password === '') {
            passwordError.textContent = 'Password is required';
            isValid = false;
        } else if (password.length < 8) {
            passwordError.textContent = 'Password must be at least 8 characters';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }
        
        // Age validation
        const age = document.getElementById('age').value;
        const ageError = document.getElementById('ageError');
        if (age === '') {
            ageError.textContent = 'Age is required';
            isValid = false;
        } else if (age < 18 || age > 120) {
            ageError.textContent = 'Age must be between 18 and 120';
            isValid = false;
        } else {
            ageError.textContent = '';
        }
        
        // Message validation
        const message = document.getElementById('message').value.trim();
        const messageError = document.getElementById('messageError');
        if (message === '') {
            messageError.textContent = 'Message is required';
            isValid = false;
        } else if (message.length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            isValid = false;
        } else {
            messageError.textContent = '';
        }
        
        // If form is valid
        if (isValid) {
            document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
            // In a real app, you would submit the form to a server here
            // demoForm.submit();
        } else {
            document.getElementById('formSuccess').textContent = '';
        }
    });
    
    // Interactive Elements
    // Counter
    let count = 0;
    const counterValue = document.getElementById('counterValue');
    const incrementBtn = document.getElementById('incrementBtn');
    const decrementBtn = document.getElementById('decrementBtn');
    const resetCounterBtn = document.getElementById('resetCounterBtn');
    
    function updateCounter() {
        counterValue.textContent = count;
    }
    
    incrementBtn.addEventListener('click', function() {
        count++;
        updateCounter();
    });
    
    decrementBtn.addEventListener('click', function() {
        count--;
        updateCounter();
    });
    
    resetCounterBtn.addEventListener('click', function() {
        count = 0;
        updateCounter();
    });
    
    // Theme Switcher
    const darkThemeBtn = document.getElementById('darkThemeBtn');
    const lightThemeBtn = document.getElementById('lightThemeBtn');
    
    darkThemeBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    });
    
    lightThemeBtn.addEventListener('click', function() {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    });
    
    // Dynamic Content
    const addItemBtn = document.getElementById('addItemBtn');
    const itemList = document.getElementById('itemList');
    let itemCount = 1;
    
    addItemBtn.addEventListener('click', function() {
        const newItem = document.createElement('li');
        newItem.textContent = `Item ${itemCount}`;
        newItem.style.margin = '5px 0';
        newItem.style.padding = '5px';
        newItem.style.backgroundColor = '#f0f0f0';
        newItem.style.borderRadius = '4px';
        
        // Add click event to remove item
        newItem.addEventListener('click', function() {
            itemList.removeChild(newItem);
        });
        
        itemList.appendChild(newItem);
        itemCount++;
    });
});