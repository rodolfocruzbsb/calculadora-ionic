1 - Criar a page para o histórico
	> ionic g page historico
2 - Instalar o plugin do SQLite
	> ionic cordova plugin add cordova-sqlite-storage
	> npm install --save @ionic-native/sqlite
	
3 - Adicionar o IOS e Android
	> ionic cordova platform add android
	> ionic cordova platform add ios
	
4 - Criar um provider para o banco de dados
	> ionic g provider database
	> ionic g provider historico
	
5 - Para testar no android deverá instalar a plataforma android com cordova	
	> ionic cordova platform add android

6 - Instalar o SDK e o AVD do android para gerenciar os dispositivos(ambos podem ser obtidos juntamente com o Android Studio):
	> https://developer.android.com/studio/?hl=pt-br#downloads
	
7 - Configurar o ANDROID_HOME nas variáveis de ambiente apontando para o sdk instalado no passo 6
	> ANDROID_HOME = d:/esenvolvimento/android/sdk/

ERRO:
	* What went wrong:
	A problem occurred configuring root project 'android'.
	> You have not accepted the license agreements of the following SDK components:
	[Android SDK Platform 25].
	Before building your project, you need to accept the license agreements and complete the installation of the missing components using the Android Studio SDK Manager.
	Alternatively, to learn how to transfer the license agreements from one workstation to another, go to http://d.android.com/r/studio-ui/export-licenses.html

	* Try:
	Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.
	Warning: License for package Android SDK Platform 25 not accepted.
	
SOLUÇÃO
	> android update sdk --no-ui --filter build-tools-24.0.0,android-24,extra-android-m2repository