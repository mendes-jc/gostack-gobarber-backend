import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    // const foundAppointment = this.find(appointment =>
    //   isEqual(date, appointment.date),
    // );

    const foundAppointment = await this.findOne({
      where: {
        date,
      },
    });

    return foundAppointment || null;
  }
}

export default AppointmentsRepository;
