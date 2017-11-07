/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        var loginButton = document.getElementById("submit");
        loginButton.onclick = this.onLoginAction;

        var storage = window.localStorage;
        if (storage.getItem("login")) {
            var loginField = document.getElementById("login");
            loginField.value = storage.getItem("login");
            var keepField = document.getElementById("keep");
            keepField.checked = true;
        }

        this.logInfos();
    },

    onLoginAction: function () {
        var loginField = document.getElementById("login");
        var passwordField = document.getElementById("password");
        var keepField = document.getElementById("keep");

        var storage = window.localStorage;

        if (keepField.checked) {
            storage.setItem("login", loginField.value);
        } else {
            if (storage.getItem("login")) {
                storage.removeItem("login")
            }
        }

        var message = "Login : " + loginField.value
            + "\nPassword : " + passwordField.value
            + "\n\nThe login will " + (keepField.checked ? "" : "not ") + "be stored";
        alert(message);

        app.logInfos();
    },

    logInfos: function () {
        var loginField = document.getElementById("login");
        var passwordField = document.getElementById("password");
        var keepField = document.getElementById("keep");
        var storage = window.localStorage;

        console.log("Login : " + loginField.value);
        console.log("Password : " + passwordField.value);
        console.log("Keep : " + keepField.checked);
        console.log("Stored login : " + storage.getItem("login"));
    }
};

app.initialize();