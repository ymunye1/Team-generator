function htmlTemplete (datainput) {

return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

    <title>Team Members</title>
</head>
<body>
    <h1 style="background-color: rgb(29, 159, 235); text-align: center; color: rgb(82, 66, 56); height: 90px;">Team Members</h1>

<div class="container">
     <div class="row justify content-center">${datainput.join(' ')} </div>
</div>
</body>
</html>`
}

module.exports= htmlTemplete;