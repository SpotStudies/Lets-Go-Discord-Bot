module.exports = {
    name: 'NAME OF THE COMMAND',
    description: 'DESCRIPTION OF THE COMMAND',
    devOnly: DO TRUE IF IT IS DEVELOPER ONLY; IF NOT; FALSE,
    testOnly: DO TRUE IF WANTED TO BE RAN ONLY IN TEST SERVER; ELSE FALSE,
    options: [
      {
        name: 'OPTIONS NAME',
        description: 'DESCRIPTION OF THE OPTION',
        required: IS IT REQUIRED (TRUE/FALSE),
        type: ApplicationCommandOptionType.,
      },
    ],
    deleted: IF IT IS DELETED TRUE; IF NOT; FALSE,
  
    FUNTION: (DEPENDENCIES) => {
        CODE
    },
  };