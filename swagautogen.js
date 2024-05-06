const swaggerAutogen = require('swagger-autogen')({openapi:"3.0.0"});

const outputFile = './swagger.json';
const endpointsFiles = ['./dist/routes.js','./dist/controllers/*.js','./dist/routes/*-grpc.js','./dist/routes/payroute.js'];
const config = {
    info: {
        title: 'Elearning endpoints docs',
        description: '',
    },
    tags: [
   /* {
        name:"Auth",
        description:"Authentication"
    },
    {
        name:"Attachment",
        description:"Attachment endpoints"
    },
    {
      name: 'User',
      description: 'users endpoints'
    },
    {
      name: 'Author',
      description: 'authors endpoints'
    },
    {
        name:'Article',
        description:'articles endpoints'
    },
    {
       name:'suptickets',
       description:'tickets endpoints'
    },*/
    {
        name:"GRPC.Auth",description:"authentication endpoints via grpc"
    },
    {
        name:"GRPC.Article",description:"articles endpoints via grpc"
    },{
        name:"GRPC.Author",description:"authors endpoints via grpc"
    },{
        name:"GRPC.User",description:"users endpoints via grpc"
    },{
        name:"GRPC.User.Ticket",description:"users' tickets endpoints via grpc"
      }
    ],
    host: '',
    schemes: [],
    components:{
        schemas:{
            LoginUser:{
                username:"",
                passwordHash:""
            },
             CreateUser:{
                 username:"",
                 firstname:"",
                 lastname:"",
                 $IDcardNumber:2980865431210,
                 email:"",
                 $age:0
             },
             CreateAuthor:{
                 username:"",
                 firstname:"",
                 lastname:"",
                 $IDcardNumber:2980865431210,
                 email:"",
                 $age:0,
                 type:"author"
             },
            AddArticle:{
                cateogry:"",
                imgurl:"",
                content:"",
                title:"",
                $userid:4
            },
            userAddTicket:{
                $type:"inquiry|complaint",
                $subject:"greet",
                $description:"how are you?"
            },
            userSupTicket:{
                $userid:"4"
            },
            AddBook:{
               $userid:"4",
               $book:{
                   title:"",
                   description:"",
                   source:"",
                   thumbnail:""
               }
           }
    }},
    securityDefinitions: {
    JWTAuth: {
      type: 'apiKey',
      in: 'header', // can be 'header', 'query' or 'cookie'
      name: 'Authorization', // name of the header, query parameter or cookie
      description: 'authorization token'
    }
  }
};

swaggerAutogen(outputFile, endpointsFiles, config);
