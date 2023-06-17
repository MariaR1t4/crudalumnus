import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
class Classroom {
    @PrimaryColumn()
    idClassroom:string;              
    @Column()
    idTeacher: number;            
    @Column()
    IdClass: number;          
    @Column()
    startClass: Date;       
    @Column()
    finishClass: Date;
}

export default Classroom;