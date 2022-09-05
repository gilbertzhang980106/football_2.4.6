    export default class LogLevel extends Object
    {
        public static DEBUG:number = 100;
        public static INFO:number = 200;
        public static WARN:number = 300;
        public static ERROR:number = 400;

        constructor()
        {
            super();
            return;
        }// end function

        public static toString(param1:number) : String
        {
            var _loc_2:String = "Unknown";
            if (param1 == LogLevel.DEBUG)
            {
                _loc_2 = "DEBUG";
            }
            else if (param1 == LogLevel.INFO)
            {
                _loc_2 = "INFO";
            }
            else if (param1 == LogLevel.WARN)
            {
                _loc_2 = "WARN";
            }
            else if (param1 == LogLevel.ERROR)
            {
                _loc_2 = "ERROR";
            }
            return _loc_2;
        }// end function

        public static fromString(param1:String) : number
        {
            param1 = param1.toUpperCase();
            if (param1 == this.toString(LogLevel.DEBUG))
            {
                return LogLevel.DEBUG;
            }
            if (param1 == this.toString(LogLevel.INFO))
            {
                return LogLevel.INFO;
            }
            if (param1 == this.toString(LogLevel.WARN))
            {
                return LogLevel.WARN;
            }
            if (param1 == this.toString(LogLevel.ERROR))
            {
                return LogLevel.ERROR;
            }
            return -1;
        }// end function

    }