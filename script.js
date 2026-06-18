function generateCard() {

    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let email = document.getElementById("email").value;

    document.getElementById("profileCard").innerHTML = `
        <div class="card">
            <h2>${name}</h2>
            <h3>${role}</h3>
            <p>${email}</p>
        </div>
    `;
}
