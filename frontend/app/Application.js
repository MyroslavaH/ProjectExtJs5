/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('ProjectExtJs5.Application', {
    extend: 'Ext.app.Application',
    
    name: 'ProjectExtJs5',


    models:[
        'ProjectExtJs5.model.CustomerModel'

    ],

    stores: [
        'ProjectExtJs5.store.InvoiceGrid',
        'ProjectExtJs5.store.CustomerStore',
        'ProjectExtJs5.store.GoodsStore',
        'ProjectExtJs5.store.NewInvoiceStore'
        ],
    views:[
//        'ProjectExtJs5.view.main.Main',
//        'ProjectExtJs5.view.login.Login'


    ],
//    controllers:[
//        'MainController'
//],
//
    launch: function () {

//        // It's important to note that this type of application could use
//        // any type of storage, i.e., Cookies, LocalStorage, etc.
//        var loggedIn;
//
//        // Check to see the current value of the localStorage key
//        loggedIn = localStorage.getItem("userData");
//
//        // This ternary operator determines the value of the TutorialLoggedIn key.
//        // If TutorialLoggedIn isn't true, we display the login window,
//        // otherwise, we display the main view
//        Ext.widget(loggedIn ? 'app-main' : 'login-container');

        // TODO - Launch the application

    }
});
