     function encrypt() {
      var plaintext = document.getElementById("plaintext").value;
      var key = document.getElementById("key").value;
      var ciphertext = "";

      // Define the substitution alphabet based on the key
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var substitution = "";
      for (var i = 0; i < key.length; i++) {
        var char = key.charAt(i).toLowerCase();
        if (alphabet.includes(char) && !substitution.includes(char)) {
          substitution += char;
        }
      }
      for (var j = 0; j < alphabet.length; j++) {
        var char = alphabet.charAt(j);
        if (!substitution.includes(char)) {
          substitution += char;
        }
      }

      // Convert plaintext to lowercase
      plaintext = plaintext.toLowerCase();

      // Encrypt each character in the plaintext
      for (var k = 0; k < plaintext.length; k++) {
        var char = plaintext.charAt(k);
        var index = alphabet.indexOf(char);
        if (index !== -1) {
          ciphertext += substitution.charAt(index);
        } else {
          ciphertext += char;
        }
      }

      // Display the ciphertext
      document.getElementById("ciphertext").value = ciphertext;
    }

    function decrypt() {
      var ciphertext = document.getElementById("ciphertext").value;
      var key = document.getElementById("key").value;
      var plaintext = "";

      // Define the substitution alphabet based on the key
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var substitution = "";
      for (var i = 0; i < key.length; i++) {
        var char = key.charAt(i).toLowerCase();
        if (alphabet.includes(char) && !substitution.includes(char)) {
          substitution += char;
        }
      }
      for (var j = 0; j < alphabet.length; j++) {
        var char = alphabet.charAt(j);
        if (!substitution.includes(char)) {
          substitution += char;
        }
      }

      // Decrypt each character in the ciphertext
      for (var k = 0; k < ciphertext.length; k++) {
        var char = ciphertext.charAt(k);
        var index = substitution.indexOf(char);
        if (index !== -1) {
          plaintext += alphabet.charAt(index);
        } else {
          plaintext += char;
        }
      }

      // Display the plaintext
      document.getElementById("plaintext").value = plaintext;
    }

    function downloadFile(content, filename) {
      var element = document.createElement("a");
      element.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(content));
      element.setAttribute("download", filename);
      element.style.display = "none";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

    function handleUploadFile(fileInput) {
      var file = fileInput.files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        var content = e.target.result;
        document.getElementById("ciphertext").value = content;
      };
      reader.readAsText(file);
    }

    function handleDownloadFile() {
      var ciphertext = document.getElementById("ciphertext").value;
      downloadFile(ciphertext, "encoded.txt");
    }

    function handleDecodeFile() {
      var ciphertext = document.getElementById("ciphertext").value;
      var key = document.getElementById("key").value;
      var plaintext = "";

      // Define the substitution alphabet based on the key
      var alphabet = "abcdefghijklmnopqrstuvwxyz";
      var substitution = "";
      for (var i = 0; i < key.length; i++) {
        var char = key.charAt(i).toLowerCase();
        if (alphabet.includes(char) && !substitution.includes(char)) {
          substitution += char;
        }
      }
      for (var j = 0; j < alphabet.length; j++) {
        var char = alphabet.charAt(j);
        if (!substitution.includes(char)) {
          substitution += char;
        }
      }

      // Decrypt each character in the ciphertext
      for (var k = 0; k < ciphertext.length; k++) {
        var char = ciphertext.charAt(k);
        var index = substitution.indexOf(char);
        if (index !== -1) {
          plaintext += alphabet.charAt(index);
        } else {
          plaintext += char;
        }
      }

      // Download the decoded plaintext file
      downloadFile(plaintext, "decoded.txt");
    }